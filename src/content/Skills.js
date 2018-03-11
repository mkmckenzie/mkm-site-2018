import React from 'react'

const SkillsContent	=	[
									{
										skillName: 'Rails',
										skillDescription:
										<ul>
											<li>My first love</li>
											<li>Attended <a href="http://railsconf.org/">RailsConf</a> 2017</li>
											<li>Learned primarily through self-directed online tutorials & mentorship</li>
										</ul>,
										flex: '1',
										key: 1, 
									},
									{
										skillName: 'Ruby',
										skillDescription: 
										<ul>
											<li>Introduced to Ruby via <a href="https://skillcrush.com/">Skillcrush</a> in 2015</li>
											<li>Co-hosted an international <a href="https://www.youtube.com/watch?v=3klKWmwpn4U&list=PLtNihcG6aHOzjk9SEW6s6oxpxFvgSUfGB">remote book club</a> for Sandi Metz's Practical Object Oriented Design in Ruby</li>
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
											<li>My current fancy</li>
											<li>Used on some features at WeddingWire</li>
											<li>First introduced to at <a href="http://rubyforgood.org/">Ruby for Good</a> 2017</li>
											<li>This site is built with <a href="https://www.gatsbyjs.org/">Gatsby</a>, a static site generator for React</li>
										</ul>,
										flex: '1',
										key: 3,
									},
									{
										skillName:'Other Skills',
										skillDescription: <div style={{ textAlign: 'center' }}> HTML5/CSS3, Coffeescript, Sass, Elasticsearch, MySQL, Adobe Illustrator, Generally Being a Good Person </div>,
										flex: '100%',
										key: 4,
									},
								];

export default SkillsContent