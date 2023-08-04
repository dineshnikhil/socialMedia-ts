import UserRepository from '../repository/user-repository';
import { createUserType } from '../../../common/src';

class UserServices {
	userRepository: UserRepository;

	constructor() {
		this.userRepository = new UserRepository();
	}

	async create(data: createUserType) {
		try {
			const user = this.userRepository.create(data);
			return user;
		} catch (error) {
			console.log('something went wrong in the services layer.!');
			console.log(error);
		}
	}
}

export default UserServices;
