export default function Filter({
                                   categories,
                                   selectedCategory,
                                   onChangeCategory = f => f
                               }: {
    categories: string[];
    selectedCategory: string;
    onChangeCategory: (value: string) => void;
}) {
    return (
        <>
            <label htmlFor="category-filter">Filtruj kategorie</label>
            <select
                value={selectedCategory}
                id="category-filter"
                onChange={(e) => onChangeCategory(e.target.value)}
            >
                <option value="">Wszystko</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </>
    );
}
