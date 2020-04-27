import { createAction, props } from '@ngrx/store';
import { Login } from '@app/shared/models/login.model';
import { Register } from '@app/shared/models/register.model';

//  to select Login
export const loginLayout = createAction('[Login] Login layout');
//  show Login layout
export const showLoginLayout = createAction('[Login] Show Login Layout');
//  to select layout User Register
export const registerLayout = createAction('[Login] Register layout');
// show register layout
export const showRegisterLayout = createAction('[Login] Show Register layout');
// submit user register for api
export const register = createAction('[Login] Register', props<{ register: Register }>());
// submit user credential
export const login = createAction('[Login] Login', props<{ login: Login }>());
