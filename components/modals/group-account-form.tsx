import { Button } from "@/components/ui/button";
import { useModalGroupAccount } from "@/hooks/use-group-account";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

export default function GroupAccountForm() {
  const { onOpenList } = useModalGroupAccount();
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="accountName">Name</Label>
        <Input id="accountName" required placeholder="e.g. E-Wallet" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="accountName">Description</Label>
        <Textarea />
      </div>
      <div className="flex space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={onOpenList}
          className="w-full"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button className="w-full">Create Group</Button>
        {/* <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            'Create Account'
          )}
        </Button> */}
      </div>
    </div>
  );
}
