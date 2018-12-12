const express = require('express');

const router = express.Router();



var arrtodo=[ {newTask:"todo"}]
router.get('/',(req,res)=>{
    res.render('todo',{todos:arrtodo})
})

router.post('/',(req,res)=>{
    var newTodo={
        newTask: req.body.todo
    }
    console.log(newTodo);
    arrtodo.push(newTodo);
    console.log(arrtodo);
    req.param.todo=" ";
    res.redirect('/');
    
})

module.exports = router