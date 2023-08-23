import React from 'react';

type User = {
    position: number;
    name: string;
    boost: string; // You can adjust the type as needed
    loyalty: string; // For example, it could be "Gold", "Silver", etc.
    bidPts: string;
    lendingPts: string;
    total: string;
  };

  const sampleUsers: User[] = [
    { position: 1, name: '347267', boost: '2.5X', loyalty: 'PRO', bidPts: '25 ETH', lendingPts: "2.5 M", total: "26.3 M" },
    { position: 2, name: '372734', boost: '2.5X', loyalty: 'PRO', bidPts: '21.25 ETH', lendingPts: "2.1 M", total: "11.1 M" },
    { position: 3, name: '658372', boost: '2.5X', loyalty: 'PRO', bidPts: '19.7 ETH', lendingPts: "1.9 M", total: "33.3 M" },
    { position: 4, name: '589262', boost: '2.5X', loyalty: 'PRO', bidPts: '17.12 ETH', lendingPts: "1.7 M", total: "12.1 M" },
    { position: 5, name: '235222', boost: '2.5X', loyalty: 'PRO', bidPts: '16.9 ETH', lendingPts: "1.6 M", total: "15.2 M" },
    { position: 6, name: '621722', boost: '1X', loyalty: 'PRO', bidPts: '15.44 ETH', lendingPts: "1.5 M", total: "8.83 M" },
    { position: 7, name: '264644', boost: '1X', loyalty: 'PRO', bidPts: '14.49 ETH', lendingPts: "1.4 M", total: "25.1 M" },
    { position: 8, name: '826266', boost: '1X', loyalty: 'PRO', bidPts: '13.37 ETH', lendingPts: "1.3 M", total: "23.1 M" },
    { position: 9, name: '938322', boost: '1X', loyalty: 'PRO', bidPts: '12.11 ETH', lendingPts: "1.2 M", total: "2.5 M" },
    { position: 10, name: '126273', boost: '1X', loyalty: 'PRO', bidPts: '10.22 ETH', lendingPts: "1.0 M", total: "14.1 M" },

];

const Leaderboard: React.FC = () => {
    return (
        <div className="flex justify-center items-start h-screen">
            <div className="mx-auto rounded-md pt-20 mt-10 border-custom-e md:scale-125 md:pt-[10em] w-full max-w-3xl px-4 md:px-0">
                <h2 className="font-bold text-2xl sm: text-small mb-2 text-center">MEMSWAP 24HR LEADERBOARD</h2>
                <p className="mb-4 pt-4 text-center sm: text-xs font-medium text-gray-300">Get to the top of the leaderboard by trading on Memswap to earn points. </p>
                <p className="mb-8 text-center font-medium text-gray-300">Coming Soon</p>

                <table className="font-medium text-sm md:text-base text-center min-w-full border-custom-e">
                    <thead>
                        <tr>
                            <th className="p-2 md:p-4 w-[10px] border-2 border-custom-e"><div>RANK</div></th>
                            <th className="p-2 md:p-4 border-2 border-custom-e"><div>NAME</div></th>
                            <th className="p-2 md:p-4 border-2 border-custom-e"><div>BOOST</div></th>
                            <th className="p-2 md:p-4 border-2 border-custom-e"><div>STATUS</div></th>
                            <th className="p-2 md:p-4 border-2 border-custom-e"><div>VOLUME (24H)</div></th>
                            <th className="p-2 md:p-4 border-2 border-custom-e"><div>POINTS (24H)</div></th>
                            <th className="p-2 md:p-4 border-2 border-custom-e"><div>TOTAL</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleUsers.map((user) => (
                            <tr key={user.position}>
                                <td className="text-xl border-2 px-2 md:px-4 py-1 md:py-2 border-custom-e">{user.position}</td>
                                <td className="text-xl border-2 px-2 md:px-4 py-1 md:py-2 border-custom-e">{user.name}</td>
                                <td className="text-xl border-2 px-2 md:px-4 py-1 md:py-2 border-custom-e" style={{ color: '#5100ff' }}>{user.boost}</td>
                                <td className="text-xl border-2 px-2 md:px-4 py-1 md:py-2 border-custom-e" style={{ color: 'lightgreen' }}>{user.loyalty}</td>
                                <td className="text-xl border-2 px-2 md:px-4 py-1 md:py-2 border-custom-e">{user.bidPts}</td>
                                <td className="text-xl border-2 px-2 md:px-4 py-1 md:py-2 border-custom-e">{user.lendingPts}</td>
                                <td className="text-xl border-2 px-2 md:px-4 py-1 md:py-2 border-custom-e">{user.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
