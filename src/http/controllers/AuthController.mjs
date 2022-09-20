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
		return authService.signIn(request.all());
	}

	/**
	 * Регистрация
	 *
	 * @param {UserService} userService
	 * @param {SignUpRequest} signUpRequest
	 * @returns {Promise<void>}
	 */
	async signUp({ userService, signUpRequest }) {
		await signUpRequest.validate();
		await userService.createUser(signUpRequest.all());
	}
}
