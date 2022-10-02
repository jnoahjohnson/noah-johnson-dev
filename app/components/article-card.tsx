export default function ArticleCard({
  title,
  imgSrc,
  date,
  tags,
}: {
  title: string;
  imgSrc: string;
  date: string;
  tags: string[];
}) {
  return (
    <div className="z-10">
      <img src={imgSrc} alt={title} className="rounded mb-2" />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="flex items-center">
        <p className="mr-3 text-lg text-gray-700">{date}</p>
        <ul className="flex space-x-1">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-white rounded-full bg-black px-2 text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
