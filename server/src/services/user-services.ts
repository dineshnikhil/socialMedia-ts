import UserRepository from '../repository/user-repository';
import { createUserType } from '../../../common/src';

class UserServices {
	userRepository: UserRepository;

	constructor() {
		this.userRepository = new UserRepository();
	}

	async create(data: createUserType) {
		try {
			const user = await this.userRepository.create(data);
			return user;
		} catch (error) {
			console.log('something went wrong in the services layer.!');
			console.log(error);
		}
	}

	async getUser(username: string) {
		try {
			const user = await this.userRepository.getUser(username);
			return user;
		} catch (error) {
			console.log('something went wrong in the services layer.!');
			console.log(error);
		}
	}

	async getUserById(userId: string) {
		try {
			const user = await this.userRepository.getUserById(userId);
			return user;
		} catch (error) {
			console.log('something went wrong in the services layer.!');
			console.log(error);
		}
	}
}

export default UserServices;
