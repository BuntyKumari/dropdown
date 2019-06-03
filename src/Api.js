import React, { Component } from 'react';
import Dropdown from './Dropdown';
class App extends Component {
    state = {
        data: {}
    };

    componentDidMount() {
        const url =  "https://storage.googleapis.com/vedantu-fos-qa/metadata/education-boards.json";
        
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
                console.log(this.state.data)
            });
    }
    render() {
        // const {data} = this.state;
        const { data } = this.state;
        // return console.log(this.state.data);
        
        // const result = data.map((entry, index) =>{
        //     return <li key={index}>{entry}</li>;
       // });
        // return <ul>{result}</ul>
        return (
            <div>
                <Dropdown  
                    listgrade={data.grades}
                    titleGrade={"Grades"}
                    listboard={data.boards}
                    titleBoard={"Boards"}
                    listwebgrade={data.webinarGrades}
                    titleWebGrade={"Webinar Grades"}
                    listexamtargets={data.examTargets}
                    titleExamTargets={"Exam Targets"}
                />
            </div>
        );
    }
}

export default App;