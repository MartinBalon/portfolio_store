import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import validate from '../../utils/validate';
import ItemOrder from '../common/ItemOrder';
import axios from 'axios';

const Admin = ({ customer, changeCustomer }) => {
    /* Details */
    const [firstName, setFirstName] = useState({ 
        value: customer ? customer.firstName : '', valid: true, reason: ''
    });
    const [lastName, setLastName] = useState({ 
        value: customer ? customer.lastName : '', valid: true, reason: ''
    });
    const [email] = useState(customer ? customer.email : ''); // read only field
    const [phone, setPhone] = useState({ 
        value: customer ? customer.phone : '', valid: true, reason: ''
    });
    const [street, setStreet] = useState({ 
        value: customer ? customer.street : '', valid: true, reason: ''
    });
    const [town, setTown] = useState({ 
        value: customer ? customer.town : '', valid: true, reason: ''
    });
    const [postCode, setPostCode] = useState({ 
        value: customer ? customer.postCode : '', valid: true, reason: ''
    });
    const [detailsValid, setDetailsValid] = useState(false);
    /* Password changes */
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState({ value: '', valid: false, reason: '' });
    const [newPasswordAgain, setNewPasswordAgain] = useState({ value: '', valid: false, reason: '' });
    const [showPasswords, setShowPasswords] = useState(false);
    /* Orders */
    const [orders, setOrders] = useState();

    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // get all orders
    useEffect(() => {
        axios
            .post('/api/get_orders', {email})
            .then( response => {
                let dataA = [];
                // map all orders
                response.data.map((order) => {
                    let parsedOrders = [];
                    // items of each order are in json format
                    order.products.map((a) => {
                        parsedOrders.push(JSON.parse(a));
                        return true;
                    });
                    // create order object with parsed json
                    const aOrder = {
                        products: parsedOrders,
                        subtotal: order.subtotal,
                        shipment: order.shipment,
                        total: order.total,
                        orderAt: order.date
                    };
                    // push each order to orders array
                    dataA.push(aOrder);
                    return true;
                });
                setOrders(dataA);
            });
    }, [email]);
    
    const handleChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const valid = {value: value, valid: true, reason: ''};

        switch (field) {
            case 'first_name':
                if (value.length < 2) {
                    setFirstName({ 
                        value: value, 
                        valid: false, 
                        reason: ' First name needs to be at least two charactes long.' 
                    });
                } else if (!validate.text(value)) {
                    setFirstName({ 
                        value: value, 
                        valid: false, 
                        reason: ' Only letters are allowed.' 
                    });
                } else {
                    setFirstName(valid);
                }
                break;
            case 'last_name':
                if (value.length < 2) {
                    setLastName({ 
                        value: value, 
                        valid: false, 
                        reason: ' Last name needs to be at least two charactes long.' 
                    });
                } else if (!validate.text(value)) {
                    setLastName({ 
                        value: value, 
                        valid: false, 
                        reason: ' Only letters are allowed.' 
                    });
                } else {
                    setLastName(valid);
                }
                break;
            case 'phone':
                if (!validate.phone(value) && value.length > 0) {
                    setPhone({ 
                        value: value, 
                        valid: false, 
                        reason: ' Wrong format - please include "+420".' 
                    });
                } else {
                    setPhone(valid);
                }
                break;
            case 'street':
                if (!validate.numLet(value) && value.length > 0) {
                    setStreet({ 
                        value: value, 
                        valid: false, 
                        reason: ' Only letters and numbers are allowed.' 
                    });
                } else {
                    setStreet(valid);
                }
                break;
            case 'town':
                if (!validate.text(value) && value.length > 0) {
                    setTown({ 
                        value: value, 
                        valid: false, 
                        reason: ' Only letters are allowed.' 
                    });
                } else {
                    setTown(valid);
                }
                break;
            case 'post_code':
                if (!validate.numbers(value) && value.length > 0) {
                    setPostCode({ 
                        value: value, 
                        valid: false, 
                        reason: ' Only nubmers are allowed.' 
                    });
                } else {
                    setPostCode(valid);
                }
                break;
            default:
                return 'nothing';           
        }
    };

    const handleDetailsSubmit = () => {
        const fields = [firstName, lastName, phone, street, town, postCode];
        let valid = true;
        // check whether a field is invalid
        fields.map((field) => {
            if (!field.valid) {
                valid = false;
            }
            return true;
        });
        // if valid update customer & use axios to send customer to our db
        if (valid) {
            changeCustomer({
                firstName: firstName.value, 
                lastName: lastName.value, 
                email,
                phone: phone.value, 
                street: street.value, 
                town: town.value, 
                postCode: postCode.value
            });
            setDetailsValid(true);
        }
    };

    const handlePasswordChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        if (field === 'password') {
            setPassword(value);
        } else if (field === 'new_password') {
            if (validate.password(value)) {
                setNewPassword({ value: value, valid: true, reason: '' });
            } else {
                setNewPassword({ 
                    value: value, 
                    valid: false, 
                    reason: ` Your password must include at least one number, 
                    combination of upper and lower case letters and at least one 
                    of the following special characters: !@#$%&*` 
                });
            }
        } else {
            if (newPassword.value !== value) {
                setNewPasswordAgain({ 
                    value: value, 
                    valid: false, 
                    reason: ' Password do not match.' 
                });
            } else {
                setNewPasswordAgain({ value: value, valid: true, reason: '' });
            }
        }
    };

    return (
        <div className="container">
            {
                !customer ? <Redirect to="/home" /> : false
            }
            <div className="xs-w-80">
                <h1 className="xs-m-y-5">Contact Details</h1>
                
                <label htmlFor="first_name">First name: 
                    <span className="warning">{ firstName.reason }</span>
                </label>
                <input 
                    type="text" 
                    name="first_name"
                    value={ firstName.value || '' }
                    onChange={ (event) => handleChange(event)} 
                />
                <br />

                <label htmlFor="last_name">Last name:
                    <span className="warning">{ lastName.reason }</span>
                </label>
                <input 
                    type="text" 
                    name="last_name"
                    value={ lastName.value || '' }
                    onChange={ (event) => handleChange(event)}  
                />
                <br />

                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    value={ email }
                    onChange={ () => false} 
                />
                <br />

                <label htmlFor="phone">Phone:
                    <span className="warning">{ phone.reason }</span>
                </label>
                <input 
                    type="text" 
                    name="phone"
                    value={ phone.value || '' }
                    onChange={ (event) => handleChange(event)}  
                />
                <br />

                <label htmlFor="street">Street &amp; house n.:
                    <span className="warning">{ street.reason }</span>
                </label>
                <input 
                    type="text" 
                    name="street"
                    value={ street.value || '' }
                    onChange={ (event) => handleChange(event)}   
                />
                <br />

                <label htmlFor="town">Town:
                    <span className="warning">{ town.reason }</span>
                </label>
                <input 
                    type="text" 
                    name="town"
                    value={ town.value || '' }
                    onChange={ (event) => handleChange(event)}    
                />
                <br />

                <label htmlFor="post_code">Post code:
                    <span className="warning">{ postCode.reason }</span>
                </label>
                <input 
                    type="text" 
                    name="post_code" 
                    value={ postCode.value || '' }
                    onChange={ (event) => handleChange(event)}    
                />
                <br />

                <div onClick={ handleDetailsSubmit } >
                    {
                        detailsValid ?
                        <Redirect to='/update_details' style={{ color: 'white'}}>
                            <div className="form_button">
                                Update Details
                            </div>
                        </Redirect>
                        :
                        <div className="form_button">
                            Update Details
                        </div>
                    }
                </div>
            </div>

            <div className="xs-w-80">        
                <h1 className="xs-m-y-5 xs-m-t-20">Change Password</h1>
                <label htmlFor="password">Password:</label>
                <input 
                    type={ showPasswords ? 'text' : 'password'} 
                    name="password"
                    value={ password || '' }
                    onChange={ (event) => handlePasswordChange(event) } 
                />
                <br />

                <label htmlFor="new_password">New password:
                    <span className="warning">{ newPassword.reason }</span>
                </label>
                <input 
                    type={ showPasswords ? 'text' : 'password'}  
                    name="new_password"
                    value={ newPassword.value || '' }
                    onChange={ (event) => handlePasswordChange(event) }  
                />
                <br />

                <label htmlFor="new_password_again">Re-type new password:
                    <span className="warning">{ newPasswordAgain.reason }</span>
                </label>
                <input 
                    type={ showPasswords ? 'text' : 'password'} 
                    name="new_password_again"
                    value={ newPasswordAgain.value || '' }
                    onChange={ (event) => handlePasswordChange(event) }   
                />

                <input 
                    type="checkbox" 
                    name="show_passwords"
                    onClick={ () => showPasswords ? setShowPasswords(false) : setShowPasswords(true) }   
                />
                <label htmlFor="show_passwords">Show passwords</label>
                <br /><br />
                {
                    password && newPassword.valid && newPasswordAgain.valid ?
                    <Link 
                        to={{
                            pathname: '/update_password',
                            passwords: {
                                password: password,
                                newPassword: newPassword.value,
                                email: email
                            }
                        }}
                    >
                        <div className="form_button">
                            Update Password
                        </div>
                    </Link>
                    :
                    <div className="form_button">
                        Update Password
                    </div>
                }
            </div>

            <div className="xs-w-80">
                <h1 className="xs-m-y-5 xs-m-t-20">Order History</h1>
                <div className="xs-m-b-10">
                {
                    orders ?
                    <>
                        <div className="order_history_order">
                            {orders.map( (order, a) => (
                                <div key={a}>
                                    <p>Order number: 234</p>
                                    {
                                        order.products.map((product, i) => (
                                            <ItemOrder product={product} key={i} />
                                        ))
                                    }
                                
                                    <div className="price clearfix xs-m-t-10">
                                        <div className="left">
                                            <h2>Subtotal:</h2>
                                            <h2>Shipment:</h2>
                                            <h2>Total:</h2>
                                        </div>
                                        <div className="right">
                                            <h2>{order.subtotal}</h2>
                                            <h2>{order.shipment}</h2>
                                            <h2>{order.total}</h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                    :
                    <h2>There are no orders to be displayed.</h2>
                }
                </div>
            </div>
        </div>
    )
};

export default Admin;