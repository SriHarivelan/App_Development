import * as Yup from 'yup';

const feedbackSchema = () => Yup.object({
    name:Yup.string().min(3).max(30).required("Please Enter the first Name !"),
    email:Yup.string().email().min(5).max(30).required("Please Enter the Email ID !"),
    comment:Yup.string().min(5).max(50).required("Please Enter Your Feedback !"),
    
    
})

export default feedbackSchema;