import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CarparkController } from "../carpark.controller";
import { CarparkService } from "../carpark.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  carParkNo: "exampleCarParkNo",
  address: "exampleAddress",
  xCoord: 42.42,
  yCoord: 42.42,
  carParkType: "exampleCarParkType",
  typeOfParkingSystem: "exampleTypeOfParkingSystem",
  shortTermParking: "exampleShortTermParking",
  nightParking: "exampleNightParking",
  carParkDecks: 42,
  gantryHeight: 42.42,
  hasBasement: "true",
  freeParking: "exampleFreeParking",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  carParkNo: "exampleCarParkNo",
  address: "exampleAddress",
  xCoord: 42.42,
  yCoord: 42.42,
  carParkType: "exampleCarParkType",
  typeOfParkingSystem: "exampleTypeOfParkingSystem",
  shortTermParking: "exampleShortTermParking",
  nightParking: "exampleNightParking",
  carParkDecks: 42,
  gantryHeight: 42.42,
  hasBasement: "true",
  freeParking: "exampleFreeParking",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    carParkNo: "exampleCarParkNo",
    address: "exampleAddress",
    xCoord: 42.42,
    yCoord: 42.42,
    carParkType: "exampleCarParkType",
    typeOfParkingSystem: "exampleTypeOfParkingSystem",
    shortTermParking: "exampleShortTermParking",
    nightParking: "exampleNightParking",
    carParkDecks: 42,
    gantryHeight: 42.42,
    hasBasement: "true",
    freeParking: "exampleFreeParking",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  carParkNo: "exampleCarParkNo",
  address: "exampleAddress",
  xCoord: 42.42,
  yCoord: 42.42,
  carParkType: "exampleCarParkType",
  typeOfParkingSystem: "exampleTypeOfParkingSystem",
  shortTermParking: "exampleShortTermParking",
  nightParking: "exampleNightParking",
  carParkDecks: 42,
  gantryHeight: 42.42,
  hasBasement: "true",
  freeParking: "exampleFreeParking",
};

const service = {
  createCarpark() {
    return CREATE_RESULT;
  },
  carparks: () => FIND_MANY_RESULT,
  carpark: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Carpark", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CarparkService,
          useValue: service,
        },
      ],
      controllers: [CarparkController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /carparks", async () => {
    await request(app.getHttpServer())
      .post("/carparks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /carparks", async () => {
    await request(app.getHttpServer())
      .get("/carparks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /carparks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/carparks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /carparks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/carparks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /carparks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/carparks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/carparks")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
