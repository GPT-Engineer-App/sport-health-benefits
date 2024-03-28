import { Box, Heading, Text, VStack, Image, Container, Flex, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={8} align="stretch">
      {/* Partie 1 */}
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Les bienfaits principaux du sport sur la santé
        </Heading>
        <Text fontSize="xl" mb={4}>
          Le sport apporte de nombreux bienfaits pour la santé physique et mentale. Il permet de renforcer le système cardiovasculaire, de maintenir un poids santé, d'améliorer la force et l'endurance, et de réduire les risques de maladies chroniques.
        </Text>
        <Text fontSize="lg">Selon une étude publiée dans le Journal of the American Medical Association, pratiquer une activité physique régulière réduit de 20 à 30% les risques de mortalité précoce, toutes causes confondues.</Text>
      </Box>

      {/* Partie 2 */}
      <Box p={8}>
        <Flex>
          <Box flex={1} pr={4}>
            <Heading as="h2" size="xl" mb={4}>
              L'importance du sport dès le plus jeune âge
            </Heading>
            <Text fontSize="xl" mb={4}>
              Faire du sport dès l'enfance permet d'adopter de bonnes habitudes pour la vie. Cela aide au développement physique, renforce les os et les muscles, et améliore la coordination. Le sport favorise aussi la socialisation et l'estime de soi.
            </Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1518614368389-5160c0b0de72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMHNwb3J0c3xlbnwwfHx8fDE3MTE1ODk4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Enfants faisant du sport" objectFit="cover" width={400} height={300} />
        </Flex>
        <Box bg="gray.50" p={4} mt={8}>
          <Text fontSize="lg" fontStyle="italic">
            "Depuis que mes enfants pratiquent un sport régulièrement, je vois une nette amélioration de leur condition physique et de leur épanouissement." - Témoignage d'un parent
          </Text>
        </Box>
        <Box bg="gray.50" p={4} mt={4}>
          <Text fontSize="lg" fontStyle="italic">
            "Depuis qu'il est tout petit mon fils a toujours aimé le sport, il a toujours eu cette envie de performer et de bouger. C'est pour cela que j'aimais l'inscrire à plusieurs activités sportives. De plus, étant moi-même un sportif depuis toujours, j'ai pu reprendre ce chemin avec mon fils." - Témoignage d'un père
          </Text>
        </Box>
      </Box>

      {/* Partie 3 */}
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Les bienfaits du sport sur le mental
        </Heading>
        <Text fontSize="xl" mb={4}>
          Au-delà des bienfaits physiques, le sport est excellent pour le bien-être mental. Il permet de réduire le stress et l'anxiété, d'améliorer l'humeur et la qualité du sommeil. L'activité physique stimule la production d'endorphines, les "hormones du bonheur".
        </Text>
        <Image src="https://images.unsplash.com/photo-1606996251932-0ebaf25eb954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtZWRpdGF0aW5nJTIwYWZ0ZXIlMjB3b3Jrb3V0fGVufDB8fHx8MTcxMTU4OTgxNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Personne méditant après le sport" objectFit="cover" width="100%" height={400} />
      </Box>

      {/* Partie 4 */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Pourquoi les jeunes délaissent-ils le sport ?
        </Heading>
        <Text fontSize="xl" mb={8}>
          Malgré les nombreux bienfaits, on constate que les jeunes sont de moins en moins actifs. Les raisons principales sont :
        </Text>
        <Container centerContent>
          <Box bg="blue.50" p={4} borderRadius="md" mb={4} maxW="sm">
            <Text>🎮 L'attrait pour les écrans et les activités sédentaires (jeux vidéo, réseaux sociaux...)</Text>
          </Box>
          <Box bg="green.50" p={4} borderRadius="md" mb={4} maxW="sm">
            <Text>📚 La charge de travail scolaire qui laisse peu de temps libre</Text>
          </Box>
          <Box bg="red.50" p={4} borderRadius="md" mb={4} maxW="sm">
            <Text>🍔 De mauvaises habitudes alimentaires qui entraînent surpoids et maladies</Text>
          </Box>
        </Container>
        <Text fontSize="xl" mt={8}>
          Il est essentiel de sensibiliser les jeunes à l'importance de rester actif et de leur donner les moyens de pratiquer une activité physique régulière et adaptée.
        </Text>
      </Box>
    </VStack>
  );
};

export default Index;
