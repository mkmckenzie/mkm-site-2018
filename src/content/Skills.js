import React from 'react'

const SkillsContent	=	[
									{
										skillName: 'Rails',
										skillDescription:
										<ul>
											<li>My first love</li>
											<li>Attended <a href="http://railsconf.org/">RailsConf</a> 2017</li>
											<li>Learned primarily through self-directed online tutorials & mentorship</li>
											<li>Created a Rails <a href="https://emkaydeum.wordpress.com/2016/04/28/tutorial-build-a-rails-app-using-the-nasa-astronomy-photo-of-the-day-api/">tutorial</a> for introducing the use of APIs with Rails for Women Who Code DC beginners classes</li>
										</ul>,
										flex: '1',
										key: 1, 
									},
									{
										skillName: 'Ruby',
										skillDescription: 
										<ul>
											<li>Introduced to Ruby via <a href="https://skillcrush.com/">Skillcrush</a> in 2015</li>
											<li>Co-hosted an international <a href="https://www.youtube.com/watch?v=3klKWmwpn4U&list=PLtNihcG6aHOzjk9SEW6s6oxpxFvgSUfGB">remote book club</a> for Sandi Metz's <u>Practical Object Oriented Design in Ruby</u></li>
											<li>Attended <a href="http://rubyconf.org/">RubyConf</a> 2015 as an <a href="http://rubyconf.org/scholarships">Opportunity Scholar</a></li>
											<li>Attended <a href="http://rubyforgood.org/">Ruby for Good</a> 2016 & 2017</li>
										</ul>,
										flex: '1',
										key: 2,
									},
									{
										skillName:'React',
										skillDescription: 
										<ul>
											<li>Written frequently at Stitch Fix for various front-end projects</li>
											<li>Used to build out vendor direct payment system at WeddingWire</li>
											<li>First introduced to React at <a href="http://rubyforgood.org/">Ruby for Good</a> 2017 while helping to rebuild <a href="https://github.com/OperationCode/operationcode_frontend">Operation Code</a></li>
											<li>This site is built with <a href="https://www.gatsbyjs.org/">Gatsby</a>, a static site generator for React 😻</li>
										</ul>,
										flex: '1',
										key: 3,
									},
									{
										skillName:'Technical Skills',
										skillDescription: <div style={{ textAlign: 'center', marginBottom: '10px', }}> HTML5/CSS3, Coffeescript, Sass, Elasticsearch, MySQL, Adobe Illustrator, Generally Being a Good Person </div>,
										flex: '100%',
										key: 4,
									},
								];

export default SkillsContent