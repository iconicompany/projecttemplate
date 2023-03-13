import Usecases from '../core/usecases/Usecases.mjs';

export default class AuthUsecases extends Usecases {
	/**
	 * Авторизация
	 *
	 * @param {AuthService} authService
	 * @param {Request} request
	 * @returns {Promise<*>}
	 */
	async signIn({ authService, request }) {
    console.log(request);
		return authService.signIn(request);
	}

	/**
	 * Регистрация
	 *
	 * @param {UserService} userService
	 * @param {SignUpValidator} SignUpValidator
	 * @returns {Promise<void>}
	 */
	async signUp({ userService, signUpValidator, request }) {
		await signUpValidator.validate(request);
		await userService.createUser(request);
	}
}
