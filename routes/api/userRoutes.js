const router = require('express').Router();

const {
    getUser,
    getUserId,
    createUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users GET all and POST 
router.route('/')
    .get(getUser)
    .post(createUser);

// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

// /api/users/:userId GET one user, PUT and DELETE by user's ID
router.route('/:userId')
    .get(getUserId)
    .put(updateUser)
    .delete(removeUser);

module.exports = router;