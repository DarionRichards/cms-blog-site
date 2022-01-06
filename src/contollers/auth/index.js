const { getPayloadWithValidFieldsOnly } = require("../../helpers/index");

const { User } = require("../../models");

const login = (req, res) => {
    res.send("login");
};
const signup = async(req, res) => {
    try {
        const payload = getPayloadWithValidFieldsOnly(
            ["firstName", "lastName", "email", "password"],
            req.body
        );

        if (Object.keys(payload).length != 4) {
            return res.status(400).json({
                success: false,
                error: "Please provide valid fields in post body.",
            });
        }

        const user = await User.create(payload);

        return res.status(200).json({
            success: true,
            data: user,
        });
    } catch (err) {
        console.log("[ERROR]: Create user failed");
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};
const logout = (req, res) => {
    res.send("logout");
};

module.exports = { login, signup, logout };