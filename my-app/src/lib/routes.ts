import { createRouteMatcher } from "@clerk/nextjs/server";

export const routeMatchers = {
  admin: createRouteMatcher([
    "/admin(.*)",
    "/patient(.*)",
    "/doctor(.*)",
    "/staff(.*)",
    "/record/users",
    "/record/doctors",
    "/record/doctors(.*)",
    "/record/staffs",
    "/record/patients",
  ]),
  doctor: createRouteMatcher([
    "/doctor(.*)",
    "/record/doctors(.*)",
    "/record/patients",
    "/patient(.*)",
    "record/staffs",
  ]),
  nurse: createRouteMatcher(["/staff(.*)", "/record/patients", "/patient(.*)"]),
  patient: createRouteMatcher(["/patient/registrations", "/patient(.*)"]),
};
//
//RouteAccessProps = {
//   "/admin(.*)": ["admin"],
//   "/patient(.*)": ["patient", "admin", "doctor", "nurse"],
//   "/doctor(.*)": ["doctor"],
//   "/staff(.*)": ["nurse", "lab_technician", "cashier"],
//   "/record/users": ["admin"],
//   "/record/doctors": ["admin"],
//   "/record/doctors(.*)": ["admin", "doctor"],
//   "/record/staffs": ["admin", "doctor"],
//   "/record/patients": ["admin", "doctor", "nurse"],
//   "/patient/registrations": ["patient"],
// };
