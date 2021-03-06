import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import SVD from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import SVS from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import Divider from 'material-ui/Divider';
import style from '../components/buildAlert.scss';

import {connect } from 'react-redux';

@connect((store) => {
	return {
		count: store.buildFeed.count,
		results: store.buildFeed.results
	};
})

class BuildFeed extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {count, results} = this.props;

		const feedList = [];

		var index = 0;

		results.forEach(function(item){
			feedList.unshift(<Divider key = {index}/>);
			if(item.result === "SUCCESS"){
				feedList.unshift(
					<ListItem key={item.id} primaryText="SUCCESS" secondaryText={"Build# " + item.id} rightIcon={<SVS className="icon-success"/>}/>
				);
			} else {
				feedList.unshift(
					<ListItem key={item.id} primaryText="FAILURE" secondaryText={"Build# " + item.id} rightIcon={<SVD className="icon-fail"/>}/>
				);
			}
			index+=1;
		});

		return (
			<Card className="inner-content">
				<CardTitle title="Build Feed"/>
				<CardText>
				    <List className="feed-list">
				    	{feedList}
				    </List>
				</CardText>
			</Card>
		);
	}
}

export default BuildFeed;