import mongoose from 'mongoose';
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);
// creates contact table/ collection

export const addNewContact = (req, res) =>{
    let newContact = new Contact(req.body);

    newContact.save((err, contact) =>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req, res) => {
    Contact.find( {}, // if it finds anything, send contact as json
                (err, contact) =>{
                    if(err){
                        res.send(err);
                    }
                    res.json(contact);
                })
};

export const getContactWithID = (req,res) =>{
    Contact.findById(req.params.contactId, (err, contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    })

}