const clients = [
  {
    id: 1,
    name: "george",
    tax_id: "123213213",
    address: "latamias 38",
    phone: "123123",
  },
  {
    id: 2,
    name: "antonis",
    tax_id: "232323232",
    address: "latamias 42",
    phone: "657897",
  },
];

export function getClients() {
  return clients;
}

export function saveClient(client) {
  // First check if clients exists
  // if he does then update the fields
  // Then save it to the clients array
  let clientInDb = clients.find((c) => c.id === client.id) || {};
  clientInDb.name = client.name;
  clientInDb.tax_id = client.tax_id;
  clientInDb.address = client.address;
  clientInDb.phone = client.phone;

  //If client does not exist
  if (!clientInDb.id) {
    clientInDb.id = clients.length + 1;
    clients.push(clientInDb);
  }
  return clientInDb;
}

export function getClient(id) {
  id = parseInt(id);
  return clients.find((client) => client.id === id);
}
