import React from 'react';
import './Home.css'

const Home = () => {
	return (
		<div className="home">
			<div className="future">
				<div className="text_button_future">
					<h1>Let's build the future of design, now.</h1>
					<p>Creating amazing tool and integrations for 1 million users or Customise Marvel for your team</p>
					<button className="future_one">Submit your app</button>
					<button className="future_two">View API docs</button>
				</div>
				<div  className="future_image">
					<img className="media_image" src="/images/illustration.png"></img>
				</div>
			</div>


			<div className="freedom_text">

				<h1>Experience the freedom to build features,right away.</h1>
				<p>you can now harness components or our platform and build powerful integrations for our 2 million users or simply just for your team  </p>
			</div>


			<div className="freedom">
				<div className="api">
					<img  src="/images/apiTeam@2x-5a72bbd0df3f17c4851dca773b2b1b8f-3ad8f.png"></img>
					<h2>Dedicated API team</h2>
					<p>Our team is avaliable for the user's questions via our Slack developer Community and Email </p>
				</div>

				<div className="graph_ql">
					<img src="/images/graphQL.png"></img>
					<h2>Our API uses Graph QL</h2>
					<p>No handling server side. Get many API's responses in the single request </p>
				</div>
				<div className="supercharge">
					<img src="/images/superchargeWorkflow.png"></img>
					<h2>Supercharge your workflow</h2>
					<p>Automate workflows, integrate and analyse data and take Marvel to the next level</p>

				</div>

			</div>


			<div className="showcase">
				<div className="text_button_showcase">
					<h1>Showcase your app in our integration directory</h1>
					<p>Building something special? always looking to work with partners who wants to the help the world brings the ideas to life.</p>
					<div className="showcase_buttons">
					<button className="showcase_one">Become a partners</button>
					<button className="showcase_two">View Integration</button>

					</div>
				</div>
				<div  className="showcase_image">
					<img className="media_image" src="/images/showcase.png"></img>
				</div>
			</div>



			<div className="slack_bot">

				<div className="slack_bot_image">
					<img className="media_image" src="/images/botbot.png"></img>
				</div>
				<div className="text_button_slack_bot">
					<h1>Slack-bot is creating and managing prototypes</h1>
					<p>Building something special? always looking to work with partners who wants to the help the world brings the ideas to life.</p>
					<div className="slack_bot_buttons">
						<button className="slack_bot_one">Become a partners</button>
						<button className="slack_bot_two">View Integration</button>
					</div>
				</div>



			</div>
		</div>



	)
}

export default Home
