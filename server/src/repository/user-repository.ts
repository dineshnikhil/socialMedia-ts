import User from '../models/users';
import { createUserType } from '../../../common/src';

class UserRepository {
	async create(userData: createUserType) {
		try {
			const user = await User.create(userData);
			return user;
		} catch (error) {
			console.log('something went wrong in repository layer..!');
			console.log(error);
		}
	}
}

export default UserRepository;
