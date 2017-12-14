import { addNewContact, getContacts, getContactWithID } from "../controllers/crmController";

const routes = (app) =>{
    app.route('/contact')
    .get(
    (req,res,next)=>{
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next(); // get out of the middleware
    }, 
    // (req,res,next) => {
    //     res.send("Get request successful");
    // }

    getContacts
    )




    // .post((req,res)=>{
    //     res.send("post request successful");
    // });
    .post(addNewContact);
// -------------------------------------
    app.route('/contact/:contactId')

    .get(getContactWithID)
    .put((req,res)=>{
        res.send("PUT request successful");
    })
    .delete((req,res)=>{
        res.send("Delete request successful");
    });
// -------------------------------------

}

export default routes;