import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import RactiveDemo from "./ractive-demo.jsx";

const images = {
  notAgain: require("./notAgain.gif"),
  thatsAllFolks: require("./thatsAllFolks.gif"),
  facePawlm: require("./facePawlm.gif")
};

export default class extends React.Component {
  render() {
    return (
<Deck transition={["zoom", "slide"]} transitionDuration={800}>

    <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1}>
            mid 2015
        </Heading>
        <Appear fid="1">
            <Text bold caps textColor="black" margin="40px 0px">
                Choosing the right V from MVC
            </Text>
        </Appear>
    </Slide>

    <Slide>
        <Heading size={3}>Ingredients needed for a single page app UI:</Heading>
        <Layout>
            <Fill><List textColor="tertiary">
                <ListItem><Appear fid="1">A JS API</Appear></ListItem>
                <ListItem><Appear fid="2">Web rendering</Appear></ListItem>
                <ListItem><Appear fid="3">User event handling</Appear></ListItem>
            </List></Fill>
            <Fill><Appear fid="4"><Image src={images.thatsAllFolks.replace('/','')} margin="0px auto 40px" height="220px"></Image></Appear></Fill>
        </Layout>
    </Slide>

    <Slide transition={['zoom']} bgColor="black">
        <BlockQuote>
            <Quote>So why are there so many UI technologies out there?</Quote>
        </BlockQuote>
        <Appear>
            <Text textColor="tertiary" margin="60px 0 0 0">The Web has made loooooong way...</Text>
        </Appear>
        <Appear>
            <Text textColor="tertiary">... which is not going to end soon !</Text>
        </Appear>
    </Slide>

    <Slide transition={['fade']} bgColor="black">
        <Heading size={5} textColor="primary" margin="0 0 60px 0">Lessons from the past you will remember</Heading>
        <Layout>
            <Fill>
                <Appear fid="1">
                    <List textColor="primary">
                        <ListItem textColor="tertiary">
                            Make isolated components
                        </ListItem>
                        <ListItem>Separate concerns</ListItem>
                        <ListItem>Test components</ListItem>
                        <ListItem>Have fun</ListItem>
                    </List>
                </Appear>
            </Fill>
            <Fill>
                <Appear fid="2">
                    <List textColor="tertiary">
                        <ListItem>No inner access to parent or child components</ListItem>
                        <ListItem>Do not share data</ListItem>
                        <ListItem>Also true for event binding</ListItem>
                    </List>
                </Appear>
            </Fill>
        </Layout>
    </Slide>

    <Slide transition={['fade']} bgColor="black">
        <Heading size={5} textColor="primary" margin="0 0 60px 0">Lessons from the past you will remember</Heading>
        <Layout>
            <Fill>
                <List textColor="primary">
                    <ListItem>Make isolated components</ListItem>
                    <ListItem textColor="tertiary">Separate concerns</ListItem>
                    <ListItem>Test components</ListItem>
                    <ListItem>Have fun</ListItem>
                </List>
            </Fill>
            <Fill>
                <List textColor="tertiary">
                    <ListItem>No logic, only formatting and event handling</ListItem>
                    <ListItem>Events should not be bound to the controller</ListItem>
                </List>
            </Fill>
        </Layout>
    </Slide>

    <Slide transition={['fade']} bgColor="black">
        <Heading size={5} textColor="primary" margin="0 0 60px 0">Lessons from the past you will remember</Heading>
        <Layout>
            <Fill>
                <List textColor="primary">
                    <ListItem>Make isolated components</ListItem>
                    <ListItem>Separate concerns</ListItem>
                    <ListItem textColor="tertiary">Test components</ListItem>
                    <ListItem>Have fun</ListItem>
                </List>
            </Fill>
            <Fill>
                <List textColor="tertiary">
                    <ListItem>The best way to ensure they are isolated</ListItem>
                    <ListItem>Tests stand as specifications</ListItem>
                    <ListItem>Avoids regression</ListItem>
                </List>
            </Fill>
        </Layout>
    </Slide>

    <Slide transition={['fade']} bgColor="black">
        <Heading size={5} textColor="primary" margin="0 0 60px 0">Lessons from the past you will remember</Heading>
        <Layout>
            <Fill>
                <List textColor="primary">
                    <ListItem>Make isolated components</ListItem>
                    <ListItem>Separate concerns</ListItem>
                    <ListItem>Test components</ListItem>
                    <ListItem textColor="tertiary">Have fun</ListItem>
                </List>
            </Fill>
            <Fill>
                <List textColor="tertiary">
                    <ListItem>Do not repeat yourself</ListItem>
                    <ListItem>1 component, 1 place</ListItem>
                    <ListItem>Love the code and<br/> the code will love you ♥</ListItem>
                </List>
            </Fill>
        </Layout>
    </Slide>

    <Slide transition={['slide']} bgColor="black">
        <BlockQuote>
            <Quote>And what about styling?</Quote>
        </BlockQuote>
        <Appear><Image src={images.facePawlm.replace('/','')} margin="40px auto" height="360px"></Image></Appear>
    </Slide>

    <Slide transition={['slide']}>
        <Heading size={1}>Data binding</Heading>
        <Heading size={3} textColor="black">What is it and why is it so important?</Heading>
    </Slide>

    <Slide transition={['fade']}>
        <Heading size={6} textColor="black">Basically, UI is about rendering and event handling.</Heading>
        <Appear>
            <Heading size={5} textColor="tertiary">Automatic binding has a great role in getting data from the user and/or rendering data.</Heading>
        </Appear>
    </Slide>

    <Slide transition={['zoom']}>
        <Heading size={3} textColor="black">Double data binding</Heading>
        <Appear>
            <List textColor="tertiary">
                <ListItem>Automatically propagates component data to the view</ListItem>
                <ListItem>Automatically propagates user input to component data</ListItem>
                <ListItem>Extremely convenient!</ListItem>
            </List>
        </Appear>
    </Slide>

    <Slide transition={['zoom']} bgColor="red">
        <Heading size={3} textColor="tertiary">But extremely dangerous</Heading>
        <Appear>
            <List textColor="tertiary">
                <ListItem>May create auto bindings recursively to children, parents and thus possibly siblings</ListItem>
                <ListItem>Does the parent really wants to know about each user input?</ListItem>
                <Appear>
                    <ListItem margin="30px 0">If no and not taken care of, too bad! Data becomes inconsistent.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        If yes, we have a parent expecting its data to be auto updated by its child(ren).
                        Implicit assumptions like this are known to be bad practices and can be costly in terms of data listening.
                    </ListItem>
                </Appear>
            </List>
        </Appear>
    </Slide>

    <Slide bgColor="primary">
        <CodePane
            lang="html"
            source={require("raw!./exampleApp.html")}
            margin="20px auto"/>
    </Slide>

    <Slide transition={['zoom']}>
        <Heading size={3} textColor="tertiary">Keep stuff isolated</Heading>
        <Heading size={3} textColor="tertiary">Pass data explicitely!</Heading>
    </Slide>

    <Slide>
        <Heading textColor="tertiary" size={5}>
            A non exhautive selection of trendy UI technologies
        </Heading>
        <Layout>
            <Fill>
                <List margin="50px 0">
                    <Appear fid="1">
                        <ListItem>Backbone</ListItem>
                        <ListItem>AngularJS</ListItem>
                        <ListItem>Polymer</ListItem>
                        <ListItem>Meteor</ListItem>
                        <ListItem>Ember</ListItem>
                    </Appear>
                </List>
            </Fill>
            <Fill>
                <List margin="50px 0">
                    <Appear fid="2">
                        <ListItem>
                            and ... <Text textColor="tertiary">Re?act(ive)?</Text>
                        </ListItem>
                    </Appear>
                </List>
            </Fill>
        </Layout>
    </Slide>

    <Slide transition={['zoom']} bgColor="black">
        <Image src={images.notAgain.replace('/','')} margin="0px auto 40px" height="293px"/>
    </Slide>

    <Slide transition={['zoom', 'fade']} bgColor="black">
        <Heading size={1} fit textColor="primary" textFont="secondary">
            {"For good's sake !"}
        </Heading>
    </Slide>

    <Slide>
        <Heading size={1} fit>
            Ractive and React: what they both have
        </Heading>
        <List margin="50px 0">
            <ListItem>Components</ListItem>
            <ListItem>Partial DOM update</ListItem>
            <ListItem>High performance (re)rendering</ListItem>
        </List>
    </Slide>

    <Slide transition={['slide']}>
        <Heading size={5} margin="0 0 60px 0">Ractive pros & cons</Heading>
        <Layout>
            <Fill>
                <List textColor="tertiary">
                    <ListItem>Fast to master</ListItem>
                    <ListItem>Very performant</ListItem>
                    <ListItem>
                        Templates fit well with<br/>
                        our current design
                    </ListItem>
                </List>
            </Fill>
            <Fill>
                <List>
                    <ListItem>Not designed to make isolated components outofdabox</ListItem>
                    <ListItem>Small community</ListItem>
                </List>
            </Fill>
        </Layout>
    </Slide>

    <Slide>
        <CodePane
            lang="html"
            source={require("raw!./ractive-demo.html")}/>
    </Slide>

    <Slide>
        <CodePane
            lang="js"
            source={require("raw!./ractive-demo.jsdemo")}
            margin="-80px 0 0 0" />
    </Slide>

    <Slide>
        <RactiveDemo />
    </Slide>

    <Slide transition={['slide']}>
        <Heading size={5} margin="0 0 60px 0">React pros & cons</Heading>
        <Layout>
            <Fill>
                <List textColor="tertiary">
                    <ListItem>Components as classes</ListItem>
                    <ListItem>No access to parents</ListItem>
                    <ListItem>
                        Declarative view<br/>
                        => definition is always valid
                    </ListItem>
                    <ListItem>
                        Testabilty - 100% JS view<br/>
                        ( => + No template parsing )
                    </ListItem>
                </List>
            </Fill>
            <Fill>
                <List>
                    <ListItem>Harder to learn for Web/JS beginners</ListItem>
                    <ListItem>
                        Writing JSX is a bit more verbose than HTML<br/>
                        (but not so much with coffee ☺)
                    </ListItem>
                </List>
            </Fill>
        </Layout>
    </Slide>
    <Slide transition={['fade']} bgColor="black">
        <BlockQuote>
            <Quote>Templates separate technologies, not concerns.</Quote>
        </BlockQuote>
    </Slide>
</Deck>
    );
  }
}
