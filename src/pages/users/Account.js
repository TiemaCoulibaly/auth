import React from "react";

const Account = () => {
	return (
		<div>
			<h3>Mon profil</h3>
			<div className="tab-content mx-5">
				<div className="card border-info mb-3">
					<div className="card-header">Informations</div>
					<div className="card-body">
						<h4 className="card-title">
							Hello <span>Tiema</span>
						</h4>
						<p className="card-text">date de création : ....</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
