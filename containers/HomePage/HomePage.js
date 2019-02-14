// libraries
import React, { PureComponent } from 'react';

// Components
import Button from 'Components/Button';
import Card from 'Components/Card';

// Styles || Utils
import images from '../../../app/assets/img';

export default class HomePage extends PureComponent {
    state = {
        currentProfile: null,
        currentImageProfile: ''
    }

    getInfo(name) {
        this.setState({ currentProfile: name })
        name === 'brian'
            ? this.setState({ currentImageProfile: images.basilic })
            : this.setState({ currentImageProfile: '' })
        console.log('2', name)
    }

    render() {

        console.log('2', this.state)
        const { currentProfile, currentImageProfile } = this.state

        return (
            <div className="HomePage">

                <Button
                    name="johan"
                    action={() => this.getInfo('johan') } />

                <Button
                    name="brian"
                    image={images.basilic}
                    action={() => this.getInfo('brian') } />

                {
                   // currentProfile && <Card name={currentProfile}/>

                   /*if (currentProfile) {
                       return (<Card name={currentProfile}/>)
                   }*/

                  /*if (currentProfile !== undefined && currentProfile !== null) {
                      return <Card name={currentProfile}/>
                  }´*/
                  currentProfile
                    ? <Card name={currentProfile} image={currentImageProfile}/>
                    : 'select a profile to start with'
                }

            </div>
        );
    }
}
