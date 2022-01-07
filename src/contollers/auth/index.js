const { getPayloadWithValidFieldsOnly } = require("../../helpers/index");

const { User } = require("../../models");

const login = async(req, res) => {
    try {
        const payload = getPayloadWithValidFieldsOnly(
            ["email", "password"],
            req.body
        );

        if (Object.keys(payload).length != 2) {
            return res.status(400).json({
                success: false,
                error: "Please provide valid fields in post body.",
            });
        }

        const user = await User.findOne({
            where: {
                email: payload.email,
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User does not exist",
            });
        }

        const validPassword = await user.checkPassword(payload.password);

        if (!validPassword) {
            return res.status(401).json({
                success: false,
                error: "User not authorized",
            });
        }

        const userInSession = {
            id: user.get("id"),
            email: user.get("email"),
            fullName: `${user.get("firstName")} ${user.get("lastName")}`,
        };

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user = userInSession;

            return res.status(200).json({
                success: true,
                data: "Login Successful",
            });
        });
    } catch (err) {
        console.log("[ERROR]: Create user failed");
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
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

        const userEmailExists = await User.findOne({
            where: {
                email: payload.email,
            },
        });

        if (userEmailExists) {
            return res.status(409).json({
                success: false,
                error: "User email already exists",
            });
        }

        await User.create(payload);

        return res.status(200).json({
            success: true,
            data: "Successfully created user",
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