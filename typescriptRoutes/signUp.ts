import { DefaultState, DefaultContext, ParameterizedContext } from "koa";
import * as Router from "koa-router";

const router: Router = new Router();
router.get(
    "/signUp",
    async (ctx: ParameterizedContext<DefaultState, DefaultContext>) => {
        ctx.body = { msg: "signUp here" };
    }
);

export default router;
