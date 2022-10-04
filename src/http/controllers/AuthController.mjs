import Controller from '../../core/controllers/Controller.mjs';

export default class AuthController extends Controller {
	/**
	 * Авторизация
	 *
	 * @param {AuthService} authService
	 * @param {Request} request
	 * @returns {Promise<*>}
	 */
	async signIn({ authService, request }) {
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
