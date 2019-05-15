import React from 'react';
import './App.css';

import Socials from './presentational/Socials'
import SectionBlock from './presentational/SectionBlock'
import ContactForm from './presentational/ContactForm'

interface AppProps {
	data: any
}

const App = ({ data }: AppProps) => (
	<div className={'App'}>
		<h1 className={'App-header'}>React Snapshot Demo</h1>
		<Socials socials={data.socials} />
		{
			data.blocks.map(({type, block}: any, i: number) => {
				switch (type) {
					case 'section':
						return <SectionBlock key={i} {...block} />
					default:
						return <></>
				}
			})	
		}
		<ContactForm />
	</div>
)


export default App