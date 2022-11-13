import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://vxdzddbgjxtlmpcsmbff.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZHpkZGJnanh0bG1wY3NtYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNjc1ODIsImV4cCI6MTk4Mzk0MzU4Mn0.ZTGODhjGTSHcGX22NLxsjPk_yxG-Kahj8jx4AhxsCTY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}