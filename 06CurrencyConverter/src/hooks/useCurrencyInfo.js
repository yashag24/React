import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const baseCurrency = currency.toUpperCase();

    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates);
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Error fetching currency data:", err);
        }
      });

    return () => controller.abort();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
