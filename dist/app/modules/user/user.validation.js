"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        email: zod_1.z.string({ required_error: 'Email is required' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
        role: zod_1.z.string().refine(value => value === 'admin' || value === 'customer', {
            message: 'Role must be either "admin" or "customer"',
        }),
        contactNo: zod_1.z.string({ required_error: 'Contact number is required' }),
        address: zod_1.z.string({ required_error: 'Address is required' }),
        profileImg: zod_1.z.string({ required_error: 'Profile image is required' }),
    }),
});
exports.UsersValidation = {
    create
};
