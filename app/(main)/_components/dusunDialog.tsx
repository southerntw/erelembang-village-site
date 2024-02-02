import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDialog } from "@/hooks/use-dialog";

interface DusunDialogProps {
  name: string;
  summary: string;
  gallery: string[];
}

export const DusunDialog = ({ name, summary, gallery }: DusunDialogProps) => {
  const isOpen = useDialog((store) => store.isOpen);
  const onClose = useDialog((store) => store.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>
        <p className="text-sm">{summary}</p>
      </DialogContent>
    </Dialog>
  );
};
