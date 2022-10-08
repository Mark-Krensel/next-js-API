import {getAllUsers, createUser} from '../../../services/userService';

export default async function handler(request, response) {
  switch (request.method) {
    case 'GET':
      const data = await getAllUsers();
      return response.status(200).json(data);

    case 'POST':
      const newUser = JSON.parse(request.body);
      createUser(newUser.name, newUser.gender, newUser.email);
      return response
        .json(201)
        .json({message: 'User created', newUser: request.body});
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
