export function formatDate(date) {
    return new Date(date).toLocaleDateString('bg-bg', { year:"numeric", month:"short", day:"numeric"})
}