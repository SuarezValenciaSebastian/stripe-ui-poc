import { useSnackbar, SnackbarMessage } from "notistack";

const useAlerts = () => {
  const { enqueueSnackbar } = useSnackbar();

  return {
    success: (message: SnackbarMessage) => {
      enqueueSnackbar(message, { variant: "success" });
    },
    error: (message: SnackbarMessage, error: unknown) => {
      enqueueSnackbar(message, { variant: "error" });
      console.error(error); // TODO: Use a better logging method
    },
  };
};

export default useAlerts;
