import {getUserById, deleteUser} from '../../../services/userService';

export default async function handler(request, response) {
  const {id} = request.query;

  switch (request.method) {
    case 'GET':
      const user = await getUserById(id);
      return response.status(200).json(user);
    case 'DELETE':
      deleteUser(id);
      return response
        .status(202)
        .json({message: `user was deleted`, deletedUser: id});
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
