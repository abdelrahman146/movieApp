import { useState } from "react";

export type Status =
  | { error: string }
  | { loading: string }
  | { success: string }
  | Record<string, never>;

export const useStatus = () => {
  const [status, setStatus] = useState<Status>({});
  return {
    setError(message: string) {
      setStatus({ error: message });
    },
    setLoading(message: string) {
      setStatus({ loading: message });
    },
    setSuccess(message: string) {
      setStatus({ success: message });
    },
    reset() {
      setStatus({});
    },
    status,
  };
};
