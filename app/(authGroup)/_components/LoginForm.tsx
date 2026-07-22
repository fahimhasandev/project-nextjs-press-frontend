import { Card } from "@/components/ui/card";
import { loginAction } from "../_actions/authActions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function LoginForm() {
  return (
    <form action={loginAction} className="space-y-4">
      <Card className="p-5 space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <Button type="submit">Login</Button>
      </Card>
    </form>
  );
}

export default LoginForm;
