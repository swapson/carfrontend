import React from 'react';
import AddCar from './components/AddCar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddCar />', () => {
    /*it('renders five <TextInput /> components', () => {
        const wrapper = shallow(<AddCar />);
        expect(wrapper.find('TextField')).toHaveLength(5);
    });*/

    it('test onChange', () => {
        const wrapper = shallow(<AddCar />);
        const brandInput = wrapper.find('TextField').get(0);
        brandInput.instance().value = 'Ford';
        brandInput.simulate('change');
        expect(wrapper.state('brand')).toEqual('Ford');
        });
});