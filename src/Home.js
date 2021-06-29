import React from 'react';

const Home = () => {
	return (
		<>
			<div className="Container_home">
				<div className="Container_text">
					<h1>Let's build the future of design,now.</h1>
					<p>Create amazing tools and integration for 1 million users or customise Marvel for your team</p>
					<div className="Buttons">
						<button className="Submit">Submit your app </button>
						<button className="View"> View API Docs</button>
					</div>
				</div>
				<div className="image">
					<img src="/images/illustration.png"></img>
				</div>
			</div>
			<div className="middle_row">
				<h1>Experience the freedom to build features, right away</h1>
				<p>
					You can now harness components of our platform and bulid powerful integration for our 2 millions users - or simply just for your team
			</p>

				<div className="middle_image">
					<div>
						<img src="/images/apiTeam@2x-5a72bbd0df3f17c4851dca773b2b1b8f-3ad8f.png"></img>
						<h3>Dedicated API Team</h3>
						<p>One team are available for user's questions via our Slack Developer Community and Email  </p>
					</div>
					<div>
						<img src="/images/graphQL.png"></img>
						<h3>Our API uses graph QL</h3>
						<p>No handling server side. Get many API's response in the single request</p>
					</div>
					<div>
						<img src="/images/superchargeWorkflow.png"></img>
						<h3>Supercharge your workflow </h3>
						<p>Automate workflows, integrate and analyse data and take Marvel to the next level</p>

					</div>



				</div>

				<div className="integration_directory">
					<div className="directory_text">
						<h1>Showcase your app in our integration directory </h1>
						<p> Building something special? we are always looking to work with partner who wants to help the world bring ideas to life</p>

						<div className="Buttons_intergation">
							<button className="Partners">Become a partner  </button>
							<button className="Integration">View Integration</button>
						</div>


						<div className="image">
							<img src="/images/showcase.png"></img>
						</div>

					</div>


					<div className="Slack_bot">
					<div className="Slack_bot_text">
						<h1>A Slack-bot for creating and managing prototypes</h1>
						<p> Building something special? we are always looking to work with partner who wants to help the world bring ideas to life</p>

						<div className="Buttons_Slack">
							<button className="Slack_button_one">Become a partner  </button>
							<button className="Slack_button_two">View Integration</button>
						</div>


						<div className="image">
							<img src="/images/botbot.png"></img>
						</div>

					</div>
					</div>


				</div>
			</div>
		</>

	)
}

export default Home
