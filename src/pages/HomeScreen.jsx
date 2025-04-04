import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  return (
		<div className="character-list">
				<div className="row">
					{store.contacts.map((character) => (
						<div key={character.id} className="col-md-4 mb-3">
							<ContactCard
								contactName={character.name}
								contactEmail={character.email}
								contactPhone={character.phone}
								contactAddress={character.address}
								onDelete={() => handleDelete(character.id)}
								onEdit={() => handleEdit(character)}
							/>
						</div>
					))}
				</div>
			)
		</div>

);
}; 