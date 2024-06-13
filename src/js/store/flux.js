const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
             contacts: []
        },
        actions: {

           fetchAllContacts: () => {
                fetch ("https://playground.4geeks.com/contact/agendas/samantha/contacts")
				.then(response => response.json())
                .then(data => {
                    console.log(data);
                    setStore({contacts: data.contacts})
                })
           },



			saveContact: async (newContact) => {
				const store = getStore();
				const newContacts = [...store.contacts, newContact]
				
				try {
					await fetch('https://playground.4geeks.com/contact/agendas/samantha/contacts' , {
						method: 'POST',
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(newContact)
					})
				} catch(e) {
					console.log('Failed to add new contact')
				}

                setStore({ contacts: newContacts });
			},


            fetchDeleteOneContact: id => {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                fetch('https://playground.4geeks.com/contact/agendas/samantha/contacts/' + id, options)
                    .then(res => {
                        if (!res.ok) throw Error(res.statusText);
                        return res;
                    })
                    .then((data) => {
                        console.log("Successfully deleted", data);
                        getActions().fetchAllContacts();
                    })
                    .catch(error => console.error("Error deleting contact:", error));
            },
        }
}
}

export default getState;