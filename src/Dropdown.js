import React, { Component } from 'react';

class Dropdown extends Component {
	constructor(props) {
		super(props);
	}
	render() {
        const { listgrade, listboard, listwebgrade, listexamtargets, titleGrade, titleBoard, titleExamTargets, titleWebGrade } = this.props;
		return (
			<div className="dropdown">
				<div class="dropdown-container">
					<div>
						<select>
							<option>{titleGrade}</option>
							{listgrade && listgrade.length > 0 &&
								listgrade.map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
						</select>
					</div>
					<div>
						<select>
							<option>{titleBoard}</option>
							{listboard && listboard.length > 0 &&
								listboard.map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
						</select>
					</div>
					<div>
						<select>
							<option>{titleWebGrade}</option>
							{listwebgrade && listwebgrade.length > 0 &&
								listwebgrade.map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
						</select>
					</div>
					<div>
						<select>
							<option>{titleExamTargets}</option>
							{listexamtargets && listexamtargets.length > 0 &&
								listexamtargets.map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default Dropdown;
