import { useState, useEffect } from "react";
import { TJobItem } from "../lib/types";

export default function useJobItem(query : string) {
    const [jobItems, setJobItems] = useState<TJobItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    
    useEffect(() => {
      async function getJobItems() {
        if (!query) return;
        
        setIsLoading(true);
        
        const resp = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${query}`
        );
        const data = await resp.json();
        
        setJobItems(data.jobItems);
        setIsLoading(false);
      }
      
      getJobItems();
    }, [query]);
    
    return {jobItems, isLoading}
}
