//publication

app.get('/publications', getAllPublications);

app.get('/publication/:id', getPublicationById);

app.post('/publications', setNewPublication);

app.put('/publications/:id', updatePublication);

app.delete('/publications/:id', deletePublication);