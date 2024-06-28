
app.get('/users', getAllUsers);

// Mostrar un usuario por su ID
app.get('/users:userId',getUserById);

// Crear un nuevo usuario
app.post('/users', setNewUser);

//Actualizar un usuario.

app.put('/users/:userId', updateUser);

//Eliminar un usuario.

app.delete('/users/:usersId', deleteUser);