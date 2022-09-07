import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import { itunesApiRequest, mediaTypes } from './components/utils';
import styled, { createGlobalStyle } from 'styled-components';
import Palette from './components/palette';
import './App.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
		margin: 0;
		background-color: ${Palette('Grey', 800)};
  }
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchResults: [] };
		this.updateSearch = this.updateSearch.bind(this);
	}

	async updateSearch(text, media) {
		const response = await itunesApiRequest(text, media);
		this.setState({ searchResults: response.results });
	}

	render() {
		const { searchResults } = this.state;
		return (
			<>
			
				<GlobalStyle />
			
				<Content>
				<Header mediaTypes={mediaTypes} startSearch={this.updateSearch} />
					<ItemsList items={searchResults} />
				</Content>
			</>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
