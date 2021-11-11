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

export function saveClient(clientIn) {
  // First check if clients exists
  // if he does then update the fields
  // Then save it to the clients array
  const clientExists = clients.find((client) => client.id === clientIn.id);
  if (clientExists) {
    clients[clientIn.id] = clientIn;
  }
  console.log(clients);
}

export function getClient(id) {
  id = parseInt(id);
  return clients.find((client) => client.id === id);
}
